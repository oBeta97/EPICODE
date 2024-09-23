import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.printf("Hello and welcome!");
        System.out.println(" ");
        System.out.println(" ");

        Scanner scanner = new Scanner(System.in);


        Ex1 ex1 = new Ex1();

        System.out.println(ex1.multiply(2, 3));

        System.out.println(" ");
        System.out.println(" ");

        System.out.println(ex1.concat("il mio numero:",26));

        System.out.println(" ");
        System.out.println(" ");
        String[] test = {"1","2","3","4","5"};
        String test2 = "test2";

        String[] res = ex1.addInArray(test, test2);

        for (String s : res)
            System.out.println(s);


        System.out.println(" ");
        System.out.println(" ");

        int insertedStrings = 0;
        String concatStrings ="";


        while(insertedStrings < 3){

            System.out.println("inserisci la stringa nr "+ (insertedStrings + 1) +" :");
            String s = scanner.nextLine();
            insertedStrings++;

            concatStrings =
                    concatStrings.
                    concat(s).
                    concat(" ");
        }
        System.out.println(concatStrings);

        System.out.println(" ");
        System.out.println(" ");
        System.out.println("Quanti lati ha la tua figura?");
        int nrOfSides = scanner.nextInt();

        int[] sides = new int[nrOfSides];
        for (int i = 0; i < nrOfSides; i++) {
            System.out.println("inserisci il lato nr "+ (i + 1) +" :");
            sides[i] = scanner.nextInt();
        }

        Shape shape = new Shape(nrOfSides,sides);

        System.out.println(" ");
        System.out.println("il perimetro della figura è: " + shape.perimeter);


        System.out.println(" ");
        System.out.println(" ");


        System.out.println("inserisci un numero:");
        int num = scanner.nextInt();

        Ex3 ex3 = new Ex3();

        System.out.println(ex3.isEven(num) ? "Il numero inserito è pari" : "Il numero inserito è dispari");

        //per salvare le credenziali

    }
}