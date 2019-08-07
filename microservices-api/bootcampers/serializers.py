from rest_framework import serializers
from bootcampers.models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('name', 'address', 'email', 'phone')
