import * as express from "express";
import * as Datastore from "nedb";

import {hello} from './services';

let app = express();
let db = new Datastore();

app.get('/', function (req, res) {
  res.send(hello());  
});

app.listen(3000);