from django.db import models

# Create your models here.
class Component(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.name
class Vehicle(models.Model):
    vin = models.CharField(max_length=100, unique=True)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.model} ({self.year})"
class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name="issues", on_delete=models.CASCADE)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=[('new', 'New'), ('in_progress', 'In Progress'), ('resolved', 'Resolved')])

    def __str__(self):
        return f"Issue for {self.vehicle.model}"
class RepairService(models.Model):
    issue = models.ForeignKey(Issue, related_name="repair_services", on_delete=models.CASCADE)
    components_used = models.ManyToManyField(Component)
    labor_charge = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def calculate_total_price(self):
        total_price = self.labor_charge + sum([component.price for component in self.components_used.all()])
        self.total_price = total_price
        self.save()
class Payment(models.Model):
    repair_service = models.ForeignKey(RepairService, on_delete=models.CASCADE)
    amount_due = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('paid', 'Paid')])
    date_paid = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Payment for {self.repair_service.issue.vehicle.model}"
