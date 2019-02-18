package main.java.y2018;

import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;

public class day3 {

    private static HashMap<String, Box> values;

    static class Box {

        private @Getter ArrayList<String> claims;

        public Box() {
            claims = new ArrayList<>();
        }
    }

    public static void main(String[] inputs) {
        values = new HashMap<>();
        ArrayList<String> valid = new ArrayList<>();
        for(String input : inputs) {
            String[] inputValues = input.split(" ");
            String id = inputValues[0].replace("#", "");
            valid.add(id);
            String[] coords = inputValues[2].split(",");
            int x = Integer.parseInt(coords[0]);
            int y = Integer.parseInt(coords[1].replace(":",""));
            coords = inputValues[3].split("x");
            int w = Integer.parseInt(coords[0]);
            int h = Integer.parseInt(coords[1]);
            for(int dx = 0; dx < w; dx++) {
                for (int dy = 0; dy < h; dy++) {
                    String key = (dx + x) + "x" + (dy + y);
                    if (!values.containsKey(key))
                        values.put(key, new Box());
                    if(values.get(key).claims.size() > 0) {
                        valid.remove(id);
                        for(String claim : values.get(key).claims)
                            valid.remove(claim);
                    }
                    values.get(key).claims.add(id);
                }
            }
        }
        //Part 1
        System.out.println("part 1: "+values.values().stream().filter(b -> b.claims.size() >= 2).count());
        //Part 2
        System.out.println("Part 2: "+valid.get(0));
    }
}
