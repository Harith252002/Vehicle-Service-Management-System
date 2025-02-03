from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ComponentViewSet, VehicleViewSet, IssueViewSet, RepairServiceViewSet, PaymentViewSet,RevenueView,ComponentList

router = DefaultRouter()
router.register(r'components', ComponentViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'issues', IssueViewSet)
router.register(r'repair-services', RepairServiceViewSet)
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/components/', ComponentList.as_view(), name='component-list'),
    path('api/revenue/', RevenueView.as_view(), name='revenue-data'),

]
