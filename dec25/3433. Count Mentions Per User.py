class Solution:
    def extract_numbers(self, s: str) -> List[str]:
        return re.findall(r'\d+', s)

    def countMentions(self, numberOfUsers: int, events: List[List[str]]) -> List[int]:

        user_cooldown = [0] * numberOfUsers
        mentions_count = [0] * numberOfUsers
        all = 0

        events.sort(key=lambda e: (int(e[1]), e[0] != "OFFLINE"))

        for event in events:
            if event[0] == "MESSAGE":
                if event[2] == "ALL":
                    all += 1
                elif event[2] == "HERE":
                    for idx, user_cd in enumerate(user_cooldown):
                        if user_cd <= int(event[1]):
                            mentions_count[idx] += 1
                else:
                    mentioned_users = self.extract_numbers(event[2])
                    
                    for user in mentioned_users:
                        user_idx = int(user)
                        mentions_count[user_idx] += 1
            elif event[0] == "OFFLINE":
                user_idx = int(event[2])
                user_cooldown[user_idx] = 60 + int(event[1])

        for i in range(numberOfUsers):
            mentions_count[i] += all

        return mentions_count