package main.java.y2018;

import java.util.ArrayList;

public class day5 {

    public static void main(String[] inputs) {
        String input = inputs[0];
        System.out.println("Part 1: " + react(input));
        int lowestLength = -1;
        ArrayList<String> tested = new ArrayList<>();
        for (int i = 0; i < input.length(); i++) {
            String c = Character.toString(input.charAt(i));
            if (tested.contains(c)) continue;
            int length = react(input.replaceAll("(?i)" + c, ""));
            if (length < lowestLength || lowestLength == -1)
                lowestLength = length;
            tested.add(c);
        }
        System.out.println("Part 2: " + lowestLength);
    }

    public static int react(String input) {
        boolean modified = true;
        while (modified) {
            modified = false;
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < input.length(); i++) {
                if (i == input.length() - 1) {
                    builder.append(Character.toString(input.charAt(i)));
                    continue;
                }
                String c = Character.toString(input.charAt(i));
                String t = Character.toString(input.charAt(i + 1));
                boolean upper = c.toUpperCase().equals(c);
                if (t.equals(upper ? c.toLowerCase() : c.toUpperCase())) {
                    modified = true;
                    i++;
                } else
                    builder.append(c);
            }
            input = builder.toString();// + Character.toString(inputs[0].charAt(inputs[0].length() - 1));
        }
        return input.length();
    }
}
