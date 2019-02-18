package main.java.y2018;

import java.util.ArrayList;
import java.util.List;

public class day6 {

    private static int size = 1000;

    private static String alphabet = "abcdefghijklmnopqrstuvwxyz";

    public static void main(String[] inputs) {
        part1(inputs);
        part2(inputs);
    }

    public static void part1(String[] inputs) {
        int[][] areas = new int[size][size];
        for (int x = 0; x < size; x++) {
            for (int y = 0; y < size; y++) {
                int closest = Integer.MAX_VALUE;
                int index = 0;
                for (String line : inputs) {
                    index++;

                    String[] coords = line.split(", ");
                    int dx = Integer.parseInt(coords[0]);
                    int dy = Integer.parseInt(coords[1]);

                    int distance = Math.abs(x - dx) + Math.abs(y - dy);
                    if (closest == distance) areas[x][y] = 0;
                    else if (closest > distance) {
                        closest = distance;
                        areas[x][y] = index;
                    }
                }
            }
        }
        //filter out all that touch edges, they would be infinite
        List<Integer> edges = new ArrayList<>();


        for (int i = 0; i < size - 1; i++) {
            int edge = areas[size - 1][i];
            edges.add(edge);

            edge = areas[i][size - 1];
            edges.add(edge);

            edge = areas[i][0];
            edges.add(edge);

            edge = areas[0][i];
            edges.add(edge);
        }

        //count all non infinite
        int[] count = new int[inputs.length];
        for (int[] area : areas) {
            for (int area1 : area) {
                if (!edges.contains(area1)) {
                    count[area1 - 1]++;
                }
            }
        }

        int max = 0;

        for (int c : count) {
            if (c > max) {
                max = c;
            }
        }


        System.out.println("Part 1: " + max);
    }

    private static void part2(String[] inputs) {
        int size = 0;
        for (int x = 0; x <= 1000; x++) {
            for (int y = 0; y <= 1000; y++) {
                int total = 0;
                for (String line : inputs) {

                    String[] coords = line.split(", ");
                    int dx = Integer.parseInt(coords[0]);
                    int dy = Integer.parseInt(coords[1]);

                    int distance = Math.abs(x - dx) + Math.abs(y - dy);
                    total += distance;
                }
                if (total < 10_000) size++;
            }
        }
        System.out.println("Part 2: " + size);
    }

}
