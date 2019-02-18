package main.java.y2018;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class day4 {

    public static void main(String[] inputs) {
        HashMap<Date, String> dates = new HashMap<>();
        for (String input : inputs) {
            String date = input.substring(1, input.indexOf("]"));
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd h:mm");
            try {
                dates.put(format.parse(date), input.substring(input.indexOf("]") + 2));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        List<Date> sortedKeys = new ArrayList(dates.keySet());
        Collections.sort(sortedKeys);
        sortedKeys.forEach(System.out::println);
        HashMap<Integer, int[]> guardValues = new HashMap<>();
        int guardOn = -1;
        int fellAsleep = 0;
        int highestGuardId = 0;
        int highestMinute = 0;
        int highestTimes = 0;
        for (Date date : sortedKeys) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(date);
            String data = dates.get(date);
            if (data.contains("Guard"))
                guardOn = Integer.parseInt(data.replaceAll("[\\D]", ""));
            else if (data.contains("asleep"))
                fellAsleep = cal.get(Calendar.MINUTE);
            else if (data.contains("wakes")) {
                int awoke = cal.get(Calendar.MINUTE);
                if (awoke < fellAsleep) awoke += 60;
                for (int i = fellAsleep; i < awoke; i++) {
                    if (!guardValues.containsKey(guardOn))
                        guardValues.put(guardOn, new int[60]);
                    guardValues.get(guardOn)[i]++;
                    int value = guardValues.get(guardOn)[i];
                    if (value > highestTimes) {
                        highestGuardId = guardOn;
                        highestMinute = i;
                        highestTimes = value;
                    }
                }
            }
        }
        System.out.println("Part 2: " + (highestGuardId * highestMinute));
        Map.Entry<Integer, int[]> top = guardValues.entrySet().stream().sorted((o1, o2) -> {
            int o1Score = 0, o2Score = 0;
            for (int slept : o1.getValue())
                o1Score += slept;
            for (int slept : o2.getValue())
                o2Score += slept;
            return new Integer(o2Score).compareTo(o1Score);
        }).findFirst().get();
        int highestValue = 0;
        highestMinute = 0;
        for (int i = 0; i < top.getValue().length; i++) {
            if (top.getValue()[i] > highestValue) {
                highestValue = top.getValue()[i];
                highestMinute = i;
            }
        }
        System.out.println("Guard ID: " + top.getKey());
        System.out.println("Highest minute: " + highestMinute);
        System.out.println("Part 1: " + (top.getKey() * highestMinute));
    }

}
