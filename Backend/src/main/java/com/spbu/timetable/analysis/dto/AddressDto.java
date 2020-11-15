package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressDto {
    private String oid;

    @JsonProperty("building_name")
    private String buildingName;

    @JsonProperty("postal_code")
    private String postalCode;

    private String city;

    private String street;

    private String korpus;

    private String house;

    private String letter;

    @JsonProperty("russian_name")
    private String displayName1;

    @JsonProperty("english_name")
    private String displayNameEnglish1;

    @JsonProperty("english_building_name")
    private String buildingNameEnglish;

}
