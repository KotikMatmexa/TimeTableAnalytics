package com.spbu.timetable.analysis.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder(toBuilder = true)
public class LocationWithEventsDto {
    private LocationDtoShort location;
    private ListForDto<EventsDto> events;
}
