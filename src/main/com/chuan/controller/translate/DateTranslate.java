package com.chuan.controller.translate;

import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class DateTranslate implements Converter<String, Date> {

    public Date convert(String sourceData) {
        SimpleDateFormat  sdf=new SimpleDateFormat("yyyy-MM-dd");
        try {
            return sdf.parse(sourceData);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
