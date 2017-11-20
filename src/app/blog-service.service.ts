import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
const BASE_URL='http://localhost:3000/blogs/';
const BASE_URL2='http://localhost:3000/users/';
const header={headers: new Headers({'Content-Type':'application/json'})};

@Injectable()
export class BlogServiceService {
  constructor(private  http:Http) { }
  getBlogs()
  {
    return this.http.get(BASE_URL).map(response => { return response.json(); });
  }
  postBlog(data)
  {
    return this.http.post(BASE_URL,data,header).map(res => res.json());
  }
  updateBlog(data)
  {
    return this.http.patch(`${BASE_URL}${data.id}`,data,header).map(res => res.json());
  }
  deleteBlog(blogId)
  {
    return this.http.delete(`${BASE_URL}${blogId}`).map(res => res.json());
  }
  getUsers()
  {
    return this.http.get(BASE_URL2).map(response1 => { return response1.json(); });
  }
  // favBlog(data, id)
  // {
  //   return this.http.patch(`${BASE_URL2}${data.id}`,data,header).map(res => res.json());
  // }
  postUser(data)
  {
    return this.http.post(BASE_URL2,data,header).map(res => res.json());
  }
  updateUser(data)
  {
    return this.http.patch(`${BASE_URL2}${data.id}`,data,header).map(res => res.json());
  }
  // markAsFav(userId, posts){
  //   let data = {favBlogs: posts}
  //   return this.http.patch(`${BASE_URL}/${userId}/`, data, header).map(res=>res.json());
  // }
  // updateUser(dataId)
  // {
  //   return this.http.patch(`${BASE_URL2}${data.id}`,data,header).map(res => res.json());
  // }
}
