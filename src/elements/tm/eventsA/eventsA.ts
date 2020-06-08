import { ChildrenElement } from "../../../shared/elements/children";

export type Event = {
  day: string;
  date: string;
  ctaHref: string;
  ctaTitle: string;
  month: string;
  pretitle: string;
  time: string;
  location: string;
  title: string;
};

export default class extends ChildrenElement<Event> {
  childTagName = "TM-EVENT-ITEM";
  extractor = (element: Element) => {
    let date = new Date(element.getAttribute("date")!);
    return {
      day: String(date.getDate()),
      date: element.getAttribute("date")!,
      ctaHref: element.getAttribute("cta-href")!,
      ctaTitle: element.getAttribute("cta-title")!,
      month: months[date.getMonth()!],
      pretitle: element.getAttribute("pretitle")!,
      time: element.getAttribute("time")!,
      location: element.getAttribute("location")!,
      title: element.getAttribute("title")!
    };
  };
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
