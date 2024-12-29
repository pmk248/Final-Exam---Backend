import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  eventid: number;
  iyear: number;
  imonth: number;
  iday: number;
  country_txt: string;
  region_txt: string;
  city: string;
  latitude: number;
  longitude: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  gname: string;
  weaptype1_txt: string;
  nkill: number;
  nwound: number;
  ransomamt?: number;
}

const EventSchema: Schema = new Schema({
  eventid: { type: Number, required: true },
  iyear: { type: Number, required: true },
  imonth: { type: Number, required: true },
  iday: { type: Number, required: true },
  country_txt: { type: String, required: true },
  region_txt: { type: String, required: true },
  city: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  attacktype1_txt: { type: String, required: true },
  targtype1_txt: { type: String, required: true },
  target1: { type: String },
  gname: { type: String },
  weaptype1_txt: { type: String },
  nkill: { type: Number },
  nwound: { type: Number },
  ransomamt: { type: Number },
});

export default mongoose.model<IEvent>('Event', EventSchema);
