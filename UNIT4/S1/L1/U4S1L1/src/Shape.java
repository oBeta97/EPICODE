import java.util.Arrays;

public class Shape {
    int nSides;
    int[] sides = new int[nSides];
    int perimeter;

    public Shape(int _nSides, int[] _sides) {
        this.nSides = _nSides;
        this.sides = _sides;
        this.perimeter = Arrays.stream(this.sides).sum();
    }

}


