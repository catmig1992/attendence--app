export const Home = () => {
    return <div>
        <h1 class="subtitle-dashboard"> Attendance Dashboard </h1>
<div class="grid-container">
<form action="/delete/:id" method="post">
<button type='submit' class="withdrawal">Withdrawal</button>
</form>
<form action="/add/:id" method="post">
<button type='submit' class="enrolled">Enrolled</button>
</form>
<form action="/add/:id" method="post">
<button type='submit' class="absent">Absent</button>
</form>
<form action="/add/:id" method="post">
<button type='submit' class="late">Late</button>
</form>
<form action="/add/:id" method="post">
<button type='submit' class="present">Present</button>
</form>
</div>
        </div>
};