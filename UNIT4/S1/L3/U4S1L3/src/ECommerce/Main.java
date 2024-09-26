package ECommerce;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Scanner scanner = new Scanner(System.in);

        System.out.println("inserisci dati del cliente:");
        System.out.println("nome e cognome:");
        String fullname = scanner.nextLine();

        System.out.println("email:");
        String email = scanner.nextLine();

        Cliente customer = new Cliente(fullname, email);

        System.out.println(customer.toString());

        System.out.println(" ");

        Carrello carrello = new Carrello(customer, new ArrayList<Articolo>());

        while (true) {
            System.out.println("creare un articolo? (y/n)");
            String risposta = scanner.nextLine();
            if (!risposta.equals("y") && !risposta.equals("n")) continue;
            if (risposta.equals("n")) break;

            System.out.println("inserisci dati di un articolo:");
            System.out.println("descrizione:");
            String descrizione = scanner.nextLine();
            System.out.println("prezzo:");
            float prezzo = Float.parseFloat(scanner.nextLine());
            System.out.println("quantita:");
            int quantita = Integer.parseInt(scanner.nextLine());

            Articolo a = new Articolo(descrizione, prezzo, quantita);

            System.out.println("articolo creato: \n " + a.toString());

            while (true) {
                System.out.println("inserire l'articolo nel carrello? (y/n)");
                risposta = scanner.nextLine();
                if (!risposta.equals("y") && !risposta.equals("n")) continue;
                if (risposta.equals("n")) break;

                carrello.addToCart(a);
                break;
            }

        }

        System.out.println("Carrello:");
        System.out.println(carrello.toString());

    }
}
