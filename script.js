document.getElementById('run-button').addEventListener('click', () => {
    console.log('Run button clicked');

    const html = document.getElementById('html-code').value;
    console.log('HTML Input:', html);

    const css = `<style>${document.getElementById('css-code').value}</style>`;
    console.log('CSS Input:', css);

    const js = `<script>${document.getElementById('js-code').value}<\/script>`;
    console.log('JS Input:', js);

    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Preview</title>
            ${css}
        </head>
        <body>
            ${html}
            ${js}
        </body>
        </html>
    `;
    console.log('Generated Iframe Content:', iframeContent);

    const iframe = document.getElementById('output');
    const iframeDoc = iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(iframeContent);
    iframeDoc.close();
    console.log('Iframe updated successfully');
});
