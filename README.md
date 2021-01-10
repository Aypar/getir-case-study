
# Getir Case Study
RESTful API running on Heroku  for "Getir Case Study" app.

Application URL | https://getir-case-study-aypar.herokuapp.com

### Runnig Locally
```bash
	git clone git@github.com:Aypar/getir-case-study.git
	cd ./getir-case-study
	npm install
	npm run start
```

### Commands
```bash
	npm run test 		#run Jest tests
	npm run start 		#run the app server
```



### API Endpoint 	POST - api/records/sum-of-records-count

https://getir-case-study-aypar.herokuapp.com/api/records/sum-of-records-count

### Sample Request Payload

```json
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Sample Response 
```json
{
  "code":0,
  "msg":"Success",
  "records":[
    {
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2800
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```
## Curl Request
```
curl --location --request POST 'https://getir-case-study-aypar.herokuapp.com/api/records/sum-of-records-count' \
--header 'Content-Type: application/json' \
--data-raw '{
"startDate": "2016-11-20",
"endDate": "2016-12-26",
"minCount": 2700,
"maxCount": 3000
}
'
```
## Directory structure
### `routes/`
You can find the controllers in this directory.
### `models/`
Database models defined in this directory.
### `services/`
You can find services used for business logic and database access in this directory.
