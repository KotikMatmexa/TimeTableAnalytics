package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressIdDto {

    private String oid;

    @JsonProperty("building_name")
    private String buildingName;

    private String city;

    private String street;

    private String korpus;

    private String house;

    private String letter;
}
