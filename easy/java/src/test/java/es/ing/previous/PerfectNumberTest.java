package es.ing.previous;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PerfectNumberTest {

    @Test
    public void testSmallPerfectNumberIsClassifiedCorrectly() {
        Assertions.assertEquals(Classification.PERFECT, new PerfectNumber(6).getClassification());
    }

    
    @Test
    public void testMediumPerfectNumberIsClassifiedCorrectly() {
        assertEquals(Classification.PERFECT, new PerfectNumber(28).getClassification());
    }

    
    @Test
    public void testLargePerfectNumberIsClassifiedCorrectly() {
        assertEquals(Classification.PERFECT, new PerfectNumber(33550336).getClassification());
    }

    
    @Test
    public void testSmallAbundantNumberIsClassifiedCorrectly() {
        assertEquals(Classification.ABUNDANT, new PerfectNumber(12).getClassification());
    }

    
    @Test
    public void testMediumAbundantNumberIsClassifiedCorrectly() {
        assertEquals(Classification.ABUNDANT, new PerfectNumber(30).getClassification());
    }

    
    @Test
    public void testLargeAbundantNumberIsClassifiedCorrectly() {
        assertEquals(Classification.ABUNDANT, new PerfectNumber(33550335).getClassification());
    }

    
    @Test
    public void testSmallestPrimeDeficientNumberIsClassifiedCorrectly() {
        assertEquals(Classification.DEFICIENT, new PerfectNumber(2).getClassification());
    }

    
    @Test
    public void testSmallestNonPrimeDeficientNumberIsClassifiedCorrectly() {
        assertEquals(Classification.DEFICIENT, new PerfectNumber(4).getClassification());
    }

    
    @Test
    public void testMediumDeficientNumberIsClassifiedCorrectly() {
        assertEquals(Classification.DEFICIENT, new PerfectNumber(32).getClassification());
    }

    
    @Test
    public void testLargeDeficientNumberIsClassifiedCorrectly() {
        assertEquals(Classification.DEFICIENT, new PerfectNumber(33550337).getClassification());
    }
}
