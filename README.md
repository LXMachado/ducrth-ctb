# Job Tracking Application for Curtains and Blinds Industry

## Overview

The Job Tracking Application is designed specifically for the curtains and blinds industry to streamline the management of customer orders, team assignments, job scheduling, and material procurement. This system integrates all core components, including customers, teams, jobs, job sheets, scheduling, and ordering, to provide a centralized platform for enhanced visibility and efficiency. The main goal of this application is to improve job tracking, boost team productivity, and reduce overhead costs by eliminating the need for paperwork and manual processes.

## Features

### 1. User Authentication and Role Management

- **User Registration and Sign In**: Users can create accounts and log in to access application features.
- **Role-based Access Control**: Supports different roles like Administrators, Team Members, Customers, and Sales Representatives. Each role has specific permissions, ensuring secure access to data and features.

### 2. Home Dashboard

- **Overview of Jobs**: Displays an overview of assigned jobs, upcoming schedules, and pending tasks.
- **Performance Metrics**: Shows key performance metrics and allows for quick navigation to create new jobs or view customer details.

### 3. Customer Database Management

- **Manage Customer Records**: Add, view, update, and delete customer records, including name, address, phone number, email, and job history.
- **Search and Filter**: Users can search for customers and filter results by various attributes.
- **Job Association**: Link customers to their past, ongoing, and future jobs.

### 4. Job Management

- **Create, Track, and Update Jobs**: Manage job records with detailed information, including job type, assigned teams, customer details, and job sheets.
- **Job Progress Tracking**: View and modify job progress, assign team members, and manage job details.

### 5. Calendar

- **Job Scheduling**: View scheduled jobs in daily, weekly, or monthly formats.
- **Modify Schedules**: Users can schedule, reschedule, or cancel jobs as needed.
- **Notifications**: Receive notifications for changes in job schedules.

### 6. Team Management

- **Manage Teams**: Create and manage different teams involved in sales, production, and installation.
- **Assign Team Members**: Assign members to specific teams and manage team workload and roles.

### 7. Material Management

- **Track Materials**: Manage materials required for each job, including ordering, delivery, and backorders.
- **Link Materials to Jobs**: Associate materials with specific jobs and customers to ensure traceability.

### 8. Job Sheets Management

- **Create and Manage Job Sheets**: Digitally manage job sheet details, including customer-specific measurements and order details.
- **Link Job Sheets**: Assign job sheets to specific jobs and customers and assign them to sales representatives for easy tracking.

## Installation

To get started with the Job Tracking Application, follow the steps below:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/job-tracking-app.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd job-tracking-app
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the required environment variables, such as database connection strings and API keys.

5. **Run the Application**:
   ```bash
   npm start
   ```

## Usage

Once the application is up and running, users can log in and access different features based on their role. The main dashboard provides an overview of all jobs, schedules, and tasks, while specific pages allow users to manage customers, jobs, teams, materials, and job sheets.

## Folder Structure

- **/src**: Contains the source code for the application.
  - **/components**: Reusable UI components.
  - **/pages**: Page components for different views (e.g., Dashboard, Customers, Jobs).
  - **/services**: API calls and data handling logic.
  - **/utils**: Utility functions and helper methods.

## Contributing

We welcome contributions to improve the Job Tracking Application. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or support, please contact:

- **Email**: info@alexandremachado.com.au
- **GitHub Issues**: [GitHub Issues Page](https://github.com/LXMachado/ducrth-ctb/issues)

## Future Improvements

- **Mobile Application**: Develop a mobile version for Android and iOS to facilitate on-the-go job tracking.
- **Analytics Dashboard**: Add advanced analytics features to provide insights into team performance and material usage.
- **Integration with Third-party Tools**: Integrate with popular tools like Slack for communication and Google Calendar for scheduling.

Thank you for using the Job Tracking Application for Curtains and Blinds Industry!
