import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Provide the full absolute path to chromedriver
chrome_service = ChromeService(ChromeDriverManager().install())
driver = webdriver.Chrome(service=chrome_service)
driver.maximize_window()

# Open the web application
driver.get('http://localhost:3000')
time.sleep(2)  # Wait for the page to load

# Test if the navbar renders correctly
navbar = driver.find_element(By.CLASS_NAME, 'gpt3__navbar')
assert navbar is not None
print('Navbar test passed.')

# Test if the "Home" link works
home_link = driver.find_element(By.LINK_TEXT, 'Home')
home_link.click()
time.sleep(2)
home_section = driver.find_element(By.ID, 'home')
assert home_section is not None
print('Home link test passed.')

# Scroll back to the top
driver.execute_script("window.scrollTo(0, 0);")
time.sleep(1)

# Test if the "About Us" link works
about_link = driver.find_element(By.LINK_TEXT, 'About Us')
driver.execute_script("arguments[0].scrollIntoView();", about_link)
about_link.click()
time.sleep(2)
about_section = driver.find_element(By.ID, 'about')
assert about_section is not None
print('About Us link test passed.')

# Scroll back to the top
driver.execute_script("window.scrollTo(0, 0);")
time.sleep(1)

# Test if the "Contact Us" link works
contact_link = driver.find_element(By.LINK_TEXT, 'Contact Us')
driver.execute_script("arguments[0].scrollIntoView();", contact_link)
contact_link.click()
time.sleep(2)
contact_section = driver.find_element(By.ID, 'contact')
assert contact_section is not None
print('Contact Us link test passed.')

# Test the contact form
first_name_input = driver.find_element(By.NAME, 'firstName')
last_name_input = driver.find_element(By.NAME, 'lastName')
email_input = driver.find_element(By.NAME, 'email')
phone_input = driver.find_element(By.NAME, 'phone')
message_textarea = driver.find_element(By.NAME, 'message')
submit_button = driver.find_element(By.XPATH, '//input[@type="submit" and @value="Send"]')

first_name_input.send_keys('TestFirstName')
last_name_input.send_keys('TestLastName')
email_input.send_keys('test@example.com')
phone_input.send_keys('1234567890')
message_textarea.send_keys('This is a test message.')
time.sleep(2)  # Pause to see the interaction

submit_button.click()
time.sleep(2)  # Pause to see the interaction

# Capture the alert message
alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_text = alert.text
alert.accept()

if "Your message has been sent. We will get back to you shortly." in alert_text:
    print("Contact form submission successful.")
elif "There was an error sending your message" in alert_text:
    print("Contact form submission failed.")
else:
    print("Unexpected alert message:", alert_text)

print("Contact form test passed.")

# Scroll back to the top
driver.execute_script("window.scrollTo(0, 0);")
time.sleep(1)

# Test if the "Chatbot" link works and directly test the chatbot input
chatbot_link = driver.find_element(By.LINK_TEXT, 'Chatbot')
driver.execute_script("arguments[0].scrollIntoView();", chatbot_link)
chatbot_link.click()
time.sleep(2)
chatbot_section = driver.find_element(By.ID, 'chatbot')
assert chatbot_section is not None
print('Chatbot link test passed.')

# Test the chatbot input with WebDriverWait
wait = WebDriverWait(driver, 10)
chat_input = wait.until(EC.element_to_be_clickable((By.CLASS_NAME, 'cs-message-input__content-editor-wrapper')))
driver.execute_script("arguments[0].scrollIntoView(true);", chat_input)
chat_input.click()
time.sleep(2)  # Pause to see the interaction
chat_input_2 = driver.find_element(By.CLASS_NAME, 'cs-message-input__content-editor')
chat_input_2.send_keys("Hello")
chat_input_2.send_keys(Keys.ENTER)
time.sleep(10)  # Wait to see the response

# Check for a valid response from the chatbot
chatbot_messages = driver.find_elements(By.CLASS_NAME, 'cs-message__content')
if len(chatbot_messages) > 0:
    print("Chatbot received a valid response.")
else:
    print("Chatbot did not receive a valid response.")
    
print("Chatbot input test passed.")

# Close the browser
driver.quit()