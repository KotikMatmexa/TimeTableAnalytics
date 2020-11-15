package com.spbu.timetable.analysis.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class ListForDto<T> {

    private long count;

    private List<T> results;
}

