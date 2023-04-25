import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResCategories, SubCategory, ListingBox } from '@app/core/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingBoxService {
  private _url = environment.API_URL;
  private _slug: string = 'abarrotes';

  // private _dataCategories!: ResCategories[];

  private _listingBoxSubject: BehaviorSubject<Array<ListingBox>> =
    new BehaviorSubject({} as Array<ListingBox>);

  readonly dataListingBox: Observable<Array<ListingBox>> =
    this._listingBoxSubject.asObservable();

  // TODO: capture value of listing-box from filter
  // names of item -> behaviorSubject
  private _namesItemsSubject: BehaviorSubject<Array<string>> =
    new BehaviorSubject({} as Array<string>);

  readonly namesItems: Observable<Array<string>> =
    this._namesItemsSubject.asObservable();

  // names of subItem-> behaviorSubject
  private _namesSubItemsSubject: BehaviorSubject<Array<string>> =
    new BehaviorSubject({} as Array<string>);

  readonly namesTags: Observable<Array<string>> =
    this._namesSubItemsSubject.asObservable();
  // end capture

  constructor(private _http: HttpClient) {}

  setListinBoxBy(categorie: string) {
    if (categorie === 'marketing') {
      this._getCategories();
      return;
    }
    this._slug = categorie;
    this._getSubCategories();
  }

  get categorie(): string {
    return this._slug;
  }

  // setter for dataSubcategories
  setDataNamesItems(data: Array<string>) {
    this._namesItemsSubject.next(data);
  }

  // setter for dataTags
  setDataNamesSubItems(data: Array<string>) {
    this._namesSubItemsSubject.next(data);
  }

  private _getSubCategories(): void {
    const params = new HttpParams().set('slug', this.categorie);
    this._http
      .get<ResCategories[]>(this._url + '/categories', {
        params,
      })
      .subscribe({
        next: (res) => {
          if (res.length > 0) {
            const subCategories = res[0].subcategories;
            const listingBox =
              this._getArrayLinstingBoxBySubCategory(subCategories);
            this._listingBoxSubject.next(listingBox);
            return;
          }

          this._listingBoxSubject.next([]);
        },
      });
  }

  private _getCategories(): void {
    this._http.get<ResCategories[]>(this._url + '/categories').subscribe({
      next: (res) => {
        const listingBox = this._getArrayLinstingBoxByCategories(res);
        this._listingBoxSubject.next(listingBox);
      },
    });
  }

  private _getArrayLinstingBoxByCategories(
    data: Array<ResCategories>
  ): Array<ListingBox> {
    if (!data.length) return [];

    const active = false;
    const listingBox = data.map((category) => {
      const subItems = category.subcategories.map((subCategory) => {
        return { name: subCategory.name, active };
      });

      return { name: category.name, active, sub_items: subItems };
    });

    return listingBox;
  }

  private _getArrayLinstingBoxBySubCategory(
    data: Array<SubCategory>
  ): Array<ListingBox> {
    if (!data.length) return [];

    const active = false;
    const listingBox = data.map(({ tags, ...item }) => {
      const subItems = tags.map((tag) => ({ active, ...tag }));
      return { sub_items: subItems, ...item, active };
    });

    return listingBox;
  }
}
