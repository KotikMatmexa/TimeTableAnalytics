package com.spbu.timetable.analysis.utils;

import java.time.LocalDateTime;

public class DateTimeFormatter {
    public static LocalDateTime parseDateTime(String dateTime) {
        java.time.format.DateTimeFormatter formatter = java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
}
