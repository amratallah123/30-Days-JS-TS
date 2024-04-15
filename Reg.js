function replaceNumericSegmentsWithId(url) {
    // This regex pattern matches a segment of the URL that is entirely numeric.
    // \b represents a word boundary, ensuring we match whole segments only.
    // \d+ matches one or more digits.
    const pattern = /\b\d+\b/g;

    // Replace all matches of the pattern in the URL with ":id"
    const modifiedUrl = url.replace(pattern, ':id');

    console.log(modifiedUrl);
}



replaceNumericSegmentsWithId("http://example.com/path/123/other/456");
replaceNumericSegmentsWithId("http://example.com/path/123/other12/456");