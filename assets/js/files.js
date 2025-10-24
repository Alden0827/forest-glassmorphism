document.addEventListener('DOMContentLoaded', function () {
    const files = [
        { id: 1, filename: 'document1.docx', filetype: 'docx' },
        { id: 2, filename: 'spreadsheet1.xlsx', filetype: 'xlsx' },
        { id: 3, filename: 'presentation1.pptx', filetype: 'pptx' },
        { id: 4, filename: 'image1.jpg', filetype: 'jpg' },
        { id: 5, filename: 'document2.docx', filetype: 'docx' },
        { id: 6, filename: 'spreadsheet2.xlsx', filetype: 'xlsx' },
        { id: 7, filename: 'presentation2.pptx', filetype: 'pptx' },
        { id: 8, filename: 'image2.jpg', filetype: 'jpg' },
        { id: 9, filename: 'document3.docx', filetype: 'docx' },
        { id: 10, filename: 'spreadsheet3.xlsx', filetype: 'xlsx' },
        { id: 11, filename: 'document4.docx', filetype: 'docx' },
        { id: 12, filename: 'spreadsheet4.xlsx', filetype: 'xlsx' },
        { id: 13, filename: 'presentation3.pptx', filetype: 'pptx' },
        { id: 14, filename: 'image3.jpg', filetype: 'jpg' },
        { id: 15, filename: 'document5.docx', filetype: 'docx' },
        { id: 16, filename: 'spreadsheet5.xlsx', filetype: 'xlsx' },
        { id: 17, filename: 'presentation4.pptx', filetype: 'pptx' },
        { id: 18, filename: 'image4.jpg', filetype: 'jpg' },
        { id: 19, filename: 'document6.docx', filetype: 'docx' },
        { id: 20, filename: 'spreadsheet6.xlsx', filetype: 'xlsx' },
        { id: 21, filename: 'document7.docx', filetype: 'docx' },
        { id: 22, filename: 'spreadsheet7.xlsx', filetype: 'xlsx' },
        { id: 23, filename: 'presentation5.pptx', filetype: 'pptx' },
        { id: 24, filename: 'image5.jpg', filetype: 'jpg' },
        { id: 25, filename: 'document8.docx', filetype: 'docx' },
        { id: 26, filename: 'spreadsheet8.xlsx', filetype: 'xlsx' },
        { id: 27, filename: 'presentation6.pptx', filetype: 'pptx' },
        { id: 28, filename: 'image6.jpg', filetype: 'jpg' },
        { id: 29, filename: 'document9.docx', filetype: 'docx' },
        { id: 30, filename: 'spreadsheet9.xlsx', filetype: 'xlsx' },
        { id: 31, filename: 'document10.docx', filetype: 'docx' },
        { id: 32, filename: 'spreadsheet10.xlsx', filetype: 'xlsx' },
        { id: 33, filename: 'presentation7.pptx', filetype: 'pptx' },
        { id: 34, filename: 'image7.jpg', filetype: 'jpg' },
        { id: 35, filename: 'document11.docx', filetype: 'docx' },
        { id: 36, filename: 'spreadsheet11.xlsx', filetype: 'xlsx' },
        { id: 37, filename: 'presentation8.pptx', filetype: 'pptx' },
        { id: 38, filename: 'image8.jpg', filetype: 'jpg' },
        { id: 39, filename: 'document12.docx', filetype: 'docx' },
        { id: 40, filename: 'spreadsheet12.xlsx', filetype: 'xlsx' },
        { id: 41, filename: 'document13.docx', filetype: 'docx' },
        { id: 42, filename: 'spreadsheet13.xlsx', filetype: 'xlsx' },
        { id: 43, filename: 'presentation9.pptx', filetype: 'pptx' },
        { id: 44, filename: 'image9.jpg', filetype: 'jpg' },
        { id: 45, filename: 'document14.docx', filetype: 'docx' },
        { id: 46, filename: 'spreadsheet14.xlsx', filetype: 'xlsx' },
        { id: 47, filename: 'presentation10.pptx', filetype: 'pptx' },
        { id: 48, filename: 'image10.jpg', filetype: 'jpg' },
        { id: 49, filename: 'document15.docx', filetype: 'docx' },
        { id: 50, filename: 'spreadsheet15.xlsx', filetype: 'xlsx' },
    ];

    const fileGrid = document.getElementById('fileGrid');
    const searchInput = document.getElementById('searchInput');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const modal = document.getElementById('fileModal');
    const modalFileName = document.getElementById('fileName');
    const closeButton = document.querySelector('.close-button');

    let currentPage = 1;
    const rows = 4;
    const cols = 12;
    const itemsPerPage = rows * cols;

    function displayFiles(filesToDisplay) {
        fileGrid.innerHTML = '';
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedFiles = filesToDisplay.slice(startIndex, endIndex);

        paginatedFiles.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <p>${file.filename}</p>
                <p>${file.filetype}</p>
            `;
            fileItem.addEventListener('click', () => {
                modalFileName.textContent = file.filename;
                modal.style.display = 'block';
            });
            fileGrid.appendChild(fileItem);
        });

        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filesToDisplay.length / itemsPerPage)}`;
    }

    function updatePaginationButtons(filteredFiles) {
        prevPage.disabled = currentPage === 1;
        nextPage.disabled = currentPage === Math.ceil(filteredFiles.length / itemsPerPage);
    }

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiles = files.filter(file => file.filename.toLowerCase().includes(searchTerm));
        displayFiles(filteredFiles);
        updatePaginationButtons(filteredFiles);
    });

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            const searchTerm = searchInput.value.toLowerCase();
            const filteredFiles = files.filter(file => file.filename.toLowerCase().includes(searchTerm));
            displayFiles(filteredFiles);
            updatePaginationButtons(filteredFiles);
        }
    });

    nextPage.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiles = files.filter(file => file.filename.toLowerCase().includes(searchTerm));
        if (currentPage < Math.ceil(filteredFiles.length / itemsPerPage)) {
            currentPage++;
            displayFiles(filteredFiles);
            updatePaginationButtons(filteredFiles);
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    displayFiles(files);
    updatePaginationButtons(files);
});
