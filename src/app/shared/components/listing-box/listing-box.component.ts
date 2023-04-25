import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ListingBox, SubItem, SubCategory } from '@app/core/interfaces';
import { ListingBoxService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'md-listing-box',
  templateUrl: './listing-box.component.html',
  styleUrls: ['./listing-box.component.css'],
})
export class ListingBoxComponent implements OnInit, OnDestroy {
  /*
   *.properties
   */
  // component
  @Input() title: string = 'Descubre';
  // observable
  private _listingBoxSSubscription: Subscription | undefined;
  // data of service
  listingBox!: Array<ListingBox>;
  // data to send to product-category
  dataItems: Array<string> = [];
  dataSubItems: Array<string> = [];


  /*
  *.constructor
  . */
  constructor(
    private _listingBoxService: ListingBoxService
  ) {}

  /*
   *.lifecycle hooks
   */

  ngOnDestroy(): void {
    this._listingBoxSSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._listingBoxSSubscription =
      this._listingBoxService.dataListingBox.subscribe({
        next: (data: Array<ListingBox>) => {
          this.listingBox = data;
          this._resetListingBoxFilters();
        },
      });
  }

  /*
   *.data tracking for ngFor in listing-box
   */
  trackByName(index: number, item: ListingBox): string {
    return item.name;
  }

  trackByTagName(index: number, subItem: SubItem): string {
    return subItem.name;
  }

  /*
   *.methods for manipulate data of listing-box
   */
  addSubCategories(sub_i: number): void {
    const currentItem = this.listingBox[sub_i];
    currentItem.active = !currentItem.active;

    // change active to false or true all.sub_items
    const itemIsActive = currentItem.active === true;
    currentItem.sub_items.forEach((tag) => (tag.active = itemIsActive));

    // add or remove item of dataItems
    const itemIsInData = this.dataItems.includes(currentItem.name);

    if (itemIsActive && !itemIsInData) {
      this.dataItems.push(currentItem.name);
    }

    if (!itemIsActive && itemIsInData) {
      this.dataItems = this.dataItems.filter((sub) => sub !== currentItem.name);
    }

    this._sendCapturedDataFromListingBox();
  }

  addTags(sub_i: number, tag_i: number): void {
    const currentItem = this.listingBox[sub_i];
    const currentTagsofSubcategory = currentItem.sub_items;
    const currentTag = currentItem.sub_items[tag_i];

    // TODO:01 change  item active to false
    this._changeStateActive(sub_i, currentTag);

    // TODO:02 remove item of dataItems
    this.dataItems = this.dataItems.filter((sub) => sub !== currentItem.name);

    // TODO:03 if tag is active add to dataSubItems or remove from dataSubItems
    const tagIsActive = currentTag.active;
    if (tagIsActive) {
      this.dataSubItems.push(currentTag.name);
    } else {
      this.dataSubItems = this.dataSubItems.filter(
        (tag) => tag !== currentTag.name
      );
    }

    // if all.sub_items are active, add item to dataItems and remove from dataSubItems
    const allTagsAreActive = currentItem.sub_items.every(
      (tag) => tag.active === true
    );

    if (allTagsAreActive) {
      currentItem.active = true;
      this.dataItems.push(currentItem.name);
      // remover.sub_items of dataSubItems if are in currentOfSubcategory
      currentTagsofSubcategory.forEach((tag) => {
        this.dataSubItems = this.dataSubItems.filter((t) => t !== tag.name);
      });
    }

    this._sendCapturedDataFromListingBox();
  }

  /*
   *.methods private
   */

  private _changeStateActive(item_i: number, subItem: SubItem): void {
    const currentItem = this.listingBox[item_i];
    const allTagsAreActive = currentItem.sub_items.every(
      (tag) => tag.active === true
    );

    if (allTagsAreActive) {
      currentItem.sub_items.forEach((tag) => (tag.active = false));
      currentItem.active = false;
      return;
    }

    // remove item of dataItems
    this.dataItems = this.dataItems.filter((sub) => sub !== currentItem.name);

    if (!subItem.name) return;
    //  change active to false or true
    const tagIsActive = subItem.active === false;

    if (tagIsActive) subItem.active = true;
    if (!tagIsActive) subItem.active = false;
  }

  // private _checkedAllTags(index: number): void {
  //   const currentItem = this.listingBox[index];

  //   if (!currentItem.active) {
  //     this._changeActiveAllTags(index, true);
  //     return;
  //   }

  //   this._changeActiveAllTags(index, false);
  // }

  private _changeActiveAllTags(item_i: number, changeStateTo: boolean): void {
    this.listingBox[item_i].active = changeStateTo;
    this.listingBox[item_i].sub_items.forEach(
      (tag) => (tag.active = changeStateTo)
    );
  }

  private _sendCapturedDataFromListingBox(): void {
    this._listingBoxService.setDataNamesItems(this.dataItems);
    this._listingBoxService.setDataNamesSubItems(this.dataSubItems);
  }

  private _resetListingBoxFilters(): void {
    this._listingBoxService.setDataNamesItems([]);
    this._listingBoxService.setDataNamesSubItems([]);
  }
}
