import java.lang.reflect.Array;

public class Ex1 {
    int multiply(int a, int b) {
        return a * b;
    }

    String concat(String a, int b) {
        return a + " " + b;
    }

    String[] addInArray(String[] a, String b) {

        String[] res = new String[6];
        for (int i = 0, j = 0; i < res.length; i++, j++) {
            if(i == 2){
                res[i] = b;
                i++;
            }

            res[i] = a[j];
        }

        return res;
    }

}
