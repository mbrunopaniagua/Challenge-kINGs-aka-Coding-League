package es.ing.previous;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CommonCharsTest {

    @Test
    public void shouldReturnAnEmptyStringWhenOneOfTheStringsIsEmpty() {
        Assertions.assertEquals(new CommonChars().longestCommonChars("", "test"), "");
        assertEquals(new CommonChars().longestCommonChars("test", ""), "");
    }

    @Test
    public void shouldReturnTheEntireStringWhenTheTwoStringsAreIdentical() {
        assertEquals(new CommonChars().longestCommonChars("test", "test"), "test");
    }


    @Test
    public void shouldReturnTheLongestCommonChars() {
        assertEquals(new CommonChars().longestCommonChars("ABCDGH", "AEDFHR"), "ADH");
        assertEquals(new CommonChars().longestCommonChars("AGGTAB", "GXTXAYB"), "GTAB");
        assertEquals(new CommonChars().longestCommonChars("ABCD", "ACDF"), "ACD");
    }
}