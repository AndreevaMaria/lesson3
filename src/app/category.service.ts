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
    return this.httpClient.get("http://lesson-3.iilinov-n.myjino.ru/api/category")
}
loadById(id) {
    return this.httpClient.get("http://lesson-3.iilinov-n.myjino.ru/api/category/" + id)
}
}
