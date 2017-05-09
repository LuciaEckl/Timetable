/* eslint-env browser */
/* global Timetable */

/*
 * TimetableView
 *
 * Dieses Modul ist für die Darstellung des Stundenplans zuständig.
 * Über eine öffentliche Methoden (render) kann eine Liste an Kursen in dem
 * Stundenplan eingetragen werden.
 *
 * Beim Erzeugen des Moduls wird als Parameter timetableEl eine Referenz 
 * auf das HTML-Element übergeben, in dem der Stundenplan angezeigt werden soll. 
 */

Timetable.TimetableView = function(timetableEl) {
  "use strict";
  var that = {};

  function render(courseList) {
  }

  that.render = render;
  return that;
};
