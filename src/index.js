import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import moment from "moment";
import l10n from './language';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var format = {
      'm': ['eine Minute', 'einer Minute'],
      'h': ['eine Stunde', 'einer Stunde'],
      'd': ['ein Tag', 'einem Tag'],
      'dd': [number + ' Tage', number + ' Tagen'],
      'M': ['ein Monat', 'einem Monat'],
      'MM': [number + ' Monate', number + ' Monaten'],
      'y': ['ein Jahr', 'einem Jahr'],
      'yy': [number + ' Jahre', number + ' Jahren']
  };
  return withoutSuffix ? format[key][0] : format[key][1];
}
moment.locale('de', {
  months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
  weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  longDateFormat : {
      LT: "HH:mm [Uhr]",
      L : "DD.MM.YYYY",
      LL : "D. MMMM YYYY",
      LLL : "D. MMMM YYYY LT",
      LLLL : "dddd, D. MMMM YYYY LT"
  },
  calendar : {
      sameDay: "[Heute um] LT",
      sameElse: "L",
      nextDay: '[Morgen um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[Gestern um] LT',
      lastWeek: '[letzten] dddd [um] LT'
  },
  relativeTime : {
      future : "in %s",
      past : "vor %s",
      s : "ein paar Sekunden",
      m : processRelativeTime,
      mm : "%d Minuten",
      h : processRelativeTime,
      hh : "%d Stunden",
      d : processRelativeTime,
      dd : processRelativeTime,
      M : processRelativeTime,
      MM : processRelativeTime,
      y : processRelativeTime,
      yy : processRelativeTime
  },
  ordinal : '%d.',
  week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});
moment.locale(l10n.getLanguage());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
