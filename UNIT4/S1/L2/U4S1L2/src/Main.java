import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Ex1 ex1 = new Ex1();
        System.out.println("----------- stringaPariDispari -----------");
        System.out.println("inserisci una stringa: ");
        String s = sc.nextLine();

        if (ex1.isEvenString(s)) {
            System.out.println("Stringa pari!");
        }
        else {
            System.out.println("Stringa dispari!");
        }

        System.out.println(" ");
        System.out.println(" ");

        System.out.println("----------- annoBisestile -----------");
        System.out.println("inserisci un anno: ");
        int userYear = sc.nextInt();

        System.out.println(" ");

        if(ex1.isLeapYear(userYear)) {
            System.out.println("Anno bisestile!");
        }
        else {
            System.out.println("Anno non bisestile!");
        }

        System.out.println(" ");
        System.out.println(" ");

        Ex2 ex2 = new Ex2();
        System.out.println("----------- swithCase -----------");

        System.out.println("inserisci un numero da 1 a 4:");
        int userNumber = sc.nextInt();
        System.out.println(ex2.stringNumber(userNumber));

        System.out.println(" ");
        System.out.println(" ");

        System.out.println("----------- While -----------");

        while(true){
            System.out.println("inserisci una stringa: ");
            System.out.println("(:q to exit)");
            String userString = sc.nextLine();

            if(userString.equals(":q"))
                break;

            System.out.println(ex2.splitStringComa(userString));
        };

        System.out.println(" ");
        System.out.println(" ");

        System.out.println("----------- FOR -----------");

        System.out.println("inserisci un numero per il countDown: ");
        int userCount = sc.nextInt();
        int[] countDown = ex2.countToZero(userCount);

        for (int j : countDown) System.out.println(j);

    }
}