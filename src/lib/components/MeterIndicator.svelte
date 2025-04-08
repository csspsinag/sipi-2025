<script lang="ts">
</script>

<div class="container-lock">
	<div class="label">
		{label}
	</div>
	<div class="percentage-map">
		<NumberFlowGroup>
			<p>{label}</p>
			<div class="main-turnout-percent">
				<NumberFlow
					value={mainTurnoutLabel.number}
					format={{ style: 'percent', minimumFractionDigits: 2 }}
				/>
			</div>
			<div class="main-turnout-count">
				<NumberFlow value={mainTurnoutCount.number} format={'0'} />/<NumberFlow
					value={mainTurnoutCountMax.number}
					format={'0'}
				/>
			</div>
		</NumberFlowGroup>
	</div>
</div>

<style>
	.container-lock {
		container-type: inline-size;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
