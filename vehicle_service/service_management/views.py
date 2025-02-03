from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Component, Vehicle, Issue, RepairService, Payment
from .serializers import ComponentSerializer, VehicleSerializer, IssueSerializer, RepairServiceSerializer, PaymentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class RepairServiceViewSet(viewsets.ModelViewSet):
    queryset = RepairService.objects.all()
    serializer_class = RepairServiceSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class RevenueView(APIView):
    def get(self, request):
        revenue_data = [
            {"month": "January", "revenue": 1200},
            {"month": "February", "revenue": 1500},
            {"month": "March", "revenue": 1700},
            {"month": "April", "revenue": 1800},
            {"month": "May", "revenue": 2000},
        ]
        return Response(revenue_data)
class ComponentList(APIView):
    def get(self, request):
        components = Component.objects.all()  # Get all components from the database
        components_data = [{"id": component.id, "name": component.name, "price": component.price, "stock": component.stock} for component in components]
        return Response(components_data)

    def post(self, request):
        name = request.data.get('name')
        price = request.data.get('price')
        stock = request.data.get('stock')
        component = Component.objects.create(name=name, price=price, stock=stock)
        return Response({"id": component.id, "name": component.name, "price": component.price, "stock": component.stock})
