// Navigate to a URL
export async function navigateTo(page, url) {
  console.log('Navigating to:', url);
  await page.goto(url);
}

// Fill input field
export async function fillInput(locator, value, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`Filling ${fieldName}:`, value);
  await locator.fill(value);
}

// Click element
export async function clickElement(locator, elementName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${elementName}`);
  if (elementName) console.log(`Clicking ${elementName}`);
  await locator.click();
}

// Extract text from a locator
export async function extractText(locator, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`Extracting  ${fieldName}`);
  const text = await locator.textContent(); // returns string or null
  console.log(`Extracted Result ` + text);
  return text ? text.trim() : ''; // remove extra spaces/newlines
}


// Select value from dropdown (by value or visible text)
export async function selectOption(locator, value, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`Selecting ${value} in ${fieldName}`);
  await locator.selectOption(value); // can be value, label, or index
}

// Tick / untick checkbox
export async function tickCheckbox(locator, check = true, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`${check ? 'Checking' : 'Unchecking'} ${fieldName}`);
  if (check) await locator.check();
  else await locator.uncheck();
}

// Upload file
export async function uploadFile(locator, filePath, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`Uploading file ${filePath} to ${fieldName}`);
  await locator.setInputFiles(filePath);
}

// Hover over element
export async function hoverElement(locator, elementName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${elementName}`);
  if (elementName) console.log(`Hovering over ${elementName}`);
  await locator.hover();
}

// Double-click element
export async function doubleClick(locator, elementName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${elementName}`);
  if (elementName) console.log(`Double-clicking ${elementName}`);
  await locator.dblclick();
}

// Right-click element
export async function rightClick(locator, elementName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${elementName}`);
  if (elementName) console.log(`Right-clicking ${elementName}`);
  await locator.click({ button: 'right' });
}

// Clear input field
export async function clearInput(locator, fieldName = '') {
  if (!locator) throw new Error(`Locator is undefined for ${fieldName}`);
  if (fieldName) console.log(`Clearing ${fieldName}`);
  await locator.fill('');
}