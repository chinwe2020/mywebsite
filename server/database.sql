CREATE DATABASE mywebsite;

CREATE TABLE messageform(
    message_id SERIAL PRIMARY KEY,
    email_address VARCHAR(255),
    email_message VARCHAR(700),
    date_column DATE DEFAULT CURRENT_DATE,
    time_column TIME DEFAULT CURRENT_TIME
);
