package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "locationfloor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Floor {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    private String name;

    @OneToMany(mappedBy = "floor", fetch = FetchType.LAZY)
    private List<Location> locations;
}
