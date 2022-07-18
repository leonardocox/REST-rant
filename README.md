# Project REST-Rant

REST-Rant is an app where users can review restaurants.

---

## Table to refer to for paths

| Method | Path                     | Purpose                                 |
| ------ | ------------------------ | --------------------------------------- |
| GET    | /                        | Home Page                               |
| GET    | /places                  | places Index Page                       |
| POST   | /places                  | create new place                        |
| GET    | /places/new              | Form page for creating new place        |
| GET    | /places/:id              | Details about place                     |
| PUT    | /places/:id              | Update a place                          |
| GET    | /places/:id/edit         | Form page for editing an existing place |
| DELETE | /places/:id              | Delete a place                          |
| POST   | /places/:id/rant         | Create a rant                           |
| DELETE | /places/:id/rant/:rantid | Delete a rant                           |
| GET    | \*                       | 404 page                                |

---

## Table to refer to for places

| Name       | City      | State | Cuisines       | Picture       |
| ---------- | --------- | ----- | -------------- | ------------- |
| Ropongi    | Charlotte | NC    | Korean Food    | Ropongi photo |
| Brixx      | Charlotte | NC    | Pizza          | Brixx logo    |
| Kirby Cafe | Tokyo     | Japan | Themed Cuisine | cafe photo    |
