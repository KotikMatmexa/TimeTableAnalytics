package com.spbu.timetable.analysis.model;


import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Address {
    private int id;

   // @GeneratedValue()
    @Id
    @NotNull
    private String oid;

    @Column(name = "buildingname")
    private String buildingName;

    @Column(name = "postalcode")
    private String postalCode;

    private String city;

    private String street;

    private String korpus;

    private String house;

    private String letter;

    @Column(name = "gcrecord")
    private Integer GCRecord;

//    private ObjectType objectType;

    @Column(name = "displayname1")
    private String displayName1;

    @Column(name = "displaynameenglish1")
    private String displayNameEnglish1;

    @Column(name = "buildingnameenglish")
    private String buildingNameEnglish;


    @OneToMany(mappedBy = "address", fetch = FetchType.LAZY)
    private List<Location> locations;

    //private WebCategory webCategory;

}
