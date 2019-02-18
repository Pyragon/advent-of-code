package main.java.y2018;

import lombok.Data;

import java.util.*;

public class day7 {

    private HashMap<String, Step> steps;
    private ArrayList<String> completed;

    private ArrayList<Worker> workers;

    private String[] inputs;

    private String result = "";

    private int totalTime;

    public day7() {
    }

    public void run(String[] inputs) {
        this.inputs = inputs;
        loadSteps();
        while (steps.size() > 0) progress(false);
        System.out.println("Part 1: " + result);
    }

    public void runPart2() {
        result = "";
        loadSteps();
        workers = new ArrayList<>();
        for (int i = 0; i < 5; i++) workers.add(new Worker());
        while (steps.size() > 0) progressPart2();
        System.out.println("Part 2: " + (totalTime - 1));
    }

    private void progress(boolean part2) {
        Optional<Map.Entry<String, Step>> optional = steps.entrySet().stream()
                .filter(entry -> !part2 ? entry.getValue().hasRequirements(this) : entry.getValue().hasRequirements(this) && !entry.getValue().beingWorkedOn)
                .sorted(Comparator.comparing(Map.Entry::getKey)).findFirst();
        if (!optional.isPresent() && !part2) throw new RuntimeException("Unable to progress.");
        if (part2) decreaseTime();
        if (part2 && (!optional.isPresent() || !hasAvailableWorker())) {
            totalTime++;
            //print(1);
            return;
        }
        String step = optional.get().getKey();
        if (!part2) {
            completed.add(step);
            steps.remove(step);
            result += step;
            return;
        }
        steps.get(step).beingWorkedOn = true;
        Worker worker = getFreeWorker();
        worker.workingOn = step;
        worker.secondsRemaining = 60 + ((int) step.charAt(0) - 64);
        totalTime++;
        //print(2);
    }

    private void progressPart2() {
        decreaseTime();
        while (hasAvailableWorker()) {
            Optional<Map.Entry<String, Step>> optional = steps.entrySet().stream()
                    .filter(entry -> entry.getValue().hasRequirements(this) && !entry.getValue().beingWorkedOn)
                    .sorted(Comparator.comparing(Map.Entry::getKey)).findFirst();
            if (!optional.isPresent()) {
                //print(2);
                totalTime++;
                return;
            }
            Map.Entry<String, Step> entry = optional.get();
            entry.getValue().beingWorkedOn = true;
            Worker worker = getFreeWorker();
            worker.workingOn = entry.getKey();
            worker.secondsRemaining = 60 + ((int) entry.getKey().charAt(0) - 64);
            //print(1);
        }
        totalTime++;
    }

    public void print(int s) {
        String print = totalTime + " - ";
        if (workers.get(0).workingOn != null)
            print += workers.get(0).workingOn;
        else print += ".";
        print += " - ";
        if (workers.get(1).workingOn != null)
            print += workers.get(1).workingOn;
        else print += ".";
        print += " - ";
        print += result;
        System.out.println(print);
    }

    private Worker getFreeWorker() {
        Optional<Worker> optional = workers.stream().filter(w -> w.workingOn == null).findAny();
        return optional.isPresent() ? optional.get() : null;
    }

    private boolean hasAvailableWorker() {
        //System.out.println(workers.stream().filter(w -> w.workingOn == null).count());
        return workers.stream().filter(w -> w.workingOn == null).count() > 0;
    }

    public void decreaseTime() {
        for (Worker worker : workers) {
            if (worker.workingOn != null) {
                worker.secondsRemaining--;
                if (worker.secondsRemaining <= 0) {
                    completed.add(worker.workingOn);
                    steps.remove(worker.workingOn);
                    result += worker.workingOn;
                    worker.workingOn = null;
                }
            }
        }
    }

    private void loadSteps() {
        steps = new HashMap<>();
        completed = new ArrayList<>();
        for (String input : inputs) {
            String requirement = input.substring(input.indexOf("Step ") + 5, input.indexOf(" must"));
            String step = input.substring(input.indexOf("step ") + 5, input.indexOf(" can"));
            if (!steps.containsKey(step))
                steps.put(step, new Step());
            if (!steps.containsKey(requirement))
                steps.put(requirement, new Step());
            steps.get(step).requirements.add(requirement);
        }
    }

    @Data
    class Worker {

        private String workingOn;
        private int secondsRemaining;

    }

    class Step {

        private ArrayList<String> requirements;
        private boolean beingWorkedOn;

        public Step() {
            requirements = new ArrayList<>();
        }

        public boolean hasRequirements(day7 day) {
            return requirements.stream().filter(r -> !day.completed.contains(r)).count() == 0;
        }

    }

    public static void main(String[] inputs) {
        day7 day = new day7();
        day.run(inputs);
        day.runPart2();
    }
}
