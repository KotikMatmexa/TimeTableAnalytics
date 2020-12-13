package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.*;
import com.spbu.timetable.analysis.model.Address;
import com.spbu.timetable.analysis.repository.AddressRepository;
import com.spbu.timetable.analysis.utils.DateTimeFormatter;
import com.spbu.timetable.analysis.utils.DtoMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;


import java.util.List;
import java.util.Arrays;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class AddressServiceTests {
	@Mock
    AddressRepository addressRepository;
	
	@Mock
	EducatorEmploymentService educatorEmploymentService;
	
	@InjectMocks
    AddressService addressService;
	
	@Test
    public void getById() {
        addressService.getById("1");
        verify(addressRepository).findByOid("1");
    }
	
	/*
	@Test
    public void findAll() {
        addressService.findAll(1, 1, "1");	
        verify(addressRepository).findAllByGCRecordIsNotNullAndStreetLike("1");
        //verify(addressRepository).findAllByGCRecordIsNotNullAndStreetLike(1,1);
    }*/
	
	/*
	@Test
	public void findAllEventsForAddress() {
		List<String> addressIds = Arrays.asList("123", "234", "345");
		String start = "2020-12-10 08:00";
		String end = "2020-12-10 09:00";
		//List<String> addressIds = Mockito.spy(new List<String>);
		//when(addressService.findAllEventsForAddress(addressIds, start, end)).thenReturn();
        //verify(addressRepository).findByOid(anyString());
        //verify(DtoMapper).convertToClass("1");
		//assertThat(addressService.findAllEventsForAddress(addressIds, start, end), instanceOf(ListForDto.class));    
	}*/
	
	@Test
	public void getAllEducatorsByAddress() {
		int offset = 1;
		int limit = 1;
		String addressId = "1";
        addressService.getAllEducatorsByAddress(offset, limit, addressId);
        verify(educatorEmploymentService).getAllEducatorsByAddress(1, 1, "1");
    }
}