package es.ing;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AcronymTest {

    @Test
    public void basic() {
        assertEquals(new Acronym("Portable Network Graphics").get(), "PNG");
    }
    
    @Test
    public void lowercaseWords() {
        assertEquals(new Acronym("Ruby on Rails").get(), "ROR");
    }

    
    @Test
    public void punctuation() {
        assertEquals(new Acronym("First In, First Out").get(), "FIFO");
    }

    
    @Test
    public void nonAcronymAllCapsWord() {
        assertEquals(new Acronym("GNU Image Manipulation Program").get(), "GIMP");
    }

    
    @Test
    public void punctuationWithoutWhitespace() {
        assertEquals(new Acronym("Complementary metal-oxide semiconductor").get(), "CMOS");
    }

    
    @Test
    public void veryLongAbbreviation() {
        assertEquals(new Acronym("Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me").get(), "ROTFLSHTMDCOALM");
    }

    
    @Test
    public void consecutiveDelimiters() {
        assertEquals(new Acronym("Something - I made up from thin air").get(), "SIMUFTA");
    }

    
    @Test
    public void apostrophes() {
        assertEquals(new Acronym("Halley's Comet").get(), "HC");
    }

    
    @Test
    public void underscoreEmphasis() {
        assertEquals(new Acronym("The Road _Not_ Taken").get(), "TRNT");
    }


}
