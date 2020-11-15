package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressWithLocationEventDto {

    private AddressDtoShort address;

    private ListForDto<LocationWithEventsDto> locationWithEventsDto;

}
