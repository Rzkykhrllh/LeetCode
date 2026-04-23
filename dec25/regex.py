import re
from typing import List

class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:

        valid_coupons_category = []

        for i in range (len(code)):
            if isActive[i] and re.match("^\w+$", code[i]) and businessLine[i] in ["electronics", "grocery", "pharmacy", "restaurant"]:
                valid_coupons_category.append((businessLine[i], code[i]))
                    

        valid_coupons_category = sorted(valid_coupons, key=lambda x: (x[0].lower(), x[1].lower()))
        valid_coupons = []

        for coupon in valid_coupons_category:
            valid_coupons.append(coupon[1])

        return valid_coupons