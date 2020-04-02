from operator import itemgetter


def job_sequencing(input_data):
    # finding the maximum deadline in the given job_details
    maximum = max(input_data, key=itemgetter(0))[0]

    # sort the job_details in descending order based on profit
    input_data = sorted(input_data, key=itemgetter(1), reverse=True)
    sequenced_data = [0] * (maximum)

    return 0



job_details = [
    (5, 200),
    (3, 180),
    (3, 190),
    (2, 300),
    (4, 120),
    (2, 100)
]

print(job_sequencing(job_details))