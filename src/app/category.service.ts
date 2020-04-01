import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(
    private httpClient: HttpClient,
) {}

loadAll () {
    return this.httpClient.get("http://iilinov-n.myjino.ru/categorys")
}
loadById(id) {
    return this.httpClient.get("http://iilinov-n.myjino.ru/category/" + id)
}
}
