package main.java;

import lombok.Cleanup;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;

public class Main {

    public static int YEAR = 2018;
    public static int DAY = 8;

    public static void main(String[] args) {
        String[] array = getInput();
        if (array == null) {
            System.out.println("Unable to get input.");
            return;
        }
        try {
            Class<?> clazz = Class.forName("main.java.y" + YEAR + ".day" + DAY);
            Method main = clazz.getMethod("main", String[].class);

            final Object[] obj = new Object[1];
            obj[0] = array;
            main.invoke(null, obj);
        } catch (ClassNotFoundException | NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
    }

    public static String[] getInput() {
        File file = new File("./../inputs/" + YEAR + "/" + DAY + ".txt");
        if (!file.exists()) return null;
        ArrayList<String> list = new ArrayList<>();
        try {
            @Cleanup BufferedReader reader = new BufferedReader(new FileReader(file));
            String line;
            while ((line = reader.readLine()) != null)
                list.add(line);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list.toArray(new String[list.size()]);
    }

}
