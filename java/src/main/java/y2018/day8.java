package main.java.y2018;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class day8 {

    private static int index;
    private static int[] array;

    private static int metadataValue = 0;

    @Data
    static class Node {

        private List<Node> children;
        private List<Integer> metadata;

        public Node() {
            children = new ArrayList<>();
            metadata = new ArrayList<>();
        }

    }

    public static void main(String[] inputs) {
        array = Stream.of(inputs[0].split(" ")).mapToInt(Integer::parseInt).toArray();
        index = 0;
        loadNode();
        System.out.println("Part 1: " + metadataValue);
    }

    public static Node loadNode() {
        Node node = new Node();
        while (index < array.length) {
            int children = array[index++];
            int metadata = array[index++];
            System.out.println(children + " " + metadata);
            for (int i = 0; i < children; i++) {

                node.children.add(loadNode());
            }
            System.out.println("Loading metadata. " + metadata);
            for (int i = 0; i < metadata; i++) {
                node.metadata.add(array[index]);
                System.out.println(array[index]);
                metadataValue += array[index++];
            }
        }
        return node;
    }

}
