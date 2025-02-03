# Vehicle-Service-Management-System
A full-stack vehicle service management system
# Vehicle Service Management System

## Overview
The Vehicle Service Management System is a full-stack web application built to manage vehicle services, repairs, components, pricing, and revenue tracking. The application allows users to:
- Register components with pricing details.
- Track vehicle repairs, including issues and component selection.
- Calculate the final cost for services and simulate payments.
- Visualize revenue using interactive graphs.

## Features
- **Component Registration & Pricing Management**: Register new vehicle components and manage pricing for repairs and services.
- **Vehicle Repair Tracking**: Track and manage vehicles that require repairs, including issue descriptions and repair requirements.
- **Issue Reporting & Component Selection**: Add vehicle issues and select between new components or repair services.
- **Final Price Calculation & Payment**: Calculate the total price based on selected components and services, and simulate a payment process.
- **Revenue Graphs**: Display daily, monthly, and yearly revenue using interactive and responsive charts.

## Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React.js, Recharts (for revenue graphs)
- **Database**: SQLite (default) or PostgreSQL (configurable in settings)
- **Charts Library**: Recharts
- **Version Control**: Git, GitHub

## Installation

### Backend Setup (Django)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vehicle-service-management-system.git
   cd vehicle-service-management-system/backend
